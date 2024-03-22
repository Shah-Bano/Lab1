
async function fetchImageUrls() {
    try {
        const apiKey = '43006974-103d193e82896e16e13a9b0fb';
        const query = 'forests'; 
        const response = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&per_page=10`);
        const data = await response.json();
        if (data.hits && data.hits.length > 0) {
            const imageUrls = data.hits.map(hit => hit.webformatURL);
            return imageUrls;
        } else {
            console.error('No images found.');
            return [];
        }
    } catch (error) {
        console.error('Error fetching images:', error);
        return [];
    }
}

async function fetchBlogPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        // just testing if i can add my own content lol
        const customPosts = [
            {
                userId: 1, 
                id: 1, 
                title: "My first blog",
                body: "Just testing to see if this works lol"
            },
            {
                userId: 1, 
                id: 2, 
                title: "Yay it works!!",
                body: "At least I know I can customize it"
            },
        ];


        //doing it to 20 as required
        const mergedPosts = [...data.slice(0, 20), ...customPosts]; 

        // Fetching iaages using the pixbyapi
        const imageUrls = await fetchImageUrls();
        for (let i = 0; i < mergedPosts.length; i++) {

            //this just goes through all fetched images
            mergedPosts[i].imageUrl = imageUrls[i % imageUrls.length]; 
        }

        return mergedPosts;
    } catch (error) {
        console.error('There was an error in fetching blog posts', error);
        return [];
    }
}

async function renderBlogPosts() {
    const blogContainer = document.getElementById('blogContainer');
    const posts = await fetchBlogPosts();

    for (const post of posts) {
        const card = `
            <div class="col-md-6">
                <div class="card blog-card">
                    <div class="card-body">
                        <h3 class="card-title">${post.title}</h3>
                        <img src="${post.imageUrl}" class="card-img-top blog-image" alt="Blog Image">
                        <p class="card-text">${post.body}</p>
                    </div>
                </div>
            </div>
        `;
        blogContainer.insertAdjacentHTML('beforeend', card);
    }
}

window.onload = renderBlogPosts;