        const blogs = [
            {
                title: "Elvandor RPG - Devlog 001",
                date: "August 9, 2024",
                tags: ["Discord", "Devlog", "Javascript"],
                thumbnail: "https://thebluemanakin.com/wp-content/uploads/2022/06/channels4_profile-900x450-1.jpeg",
                description: "My first devlog on Elvandor RPG, a complex Discord RPG bot.",
                featured: false,
                url: "/blog/08-09-2024"
            },
            {
                title: "Rairb's Introduction",
                date: "August 9, 2024",
                tags: ["Rairb", "Intro"],
                thumbnail: "https://media.discordapp.net/attachments/897956981808197663/1271578671404159047/ss_a8218feee9d2bb18f3df716405468b38a171a1bd.1920x1080.jpg?ex=66b7d96c&is=66b687ec&hm=d4d81d9243b3eaba71a0aa4fa735c3e4b2d96cd6e0aeaf85ff08af27dd322b82",
                description: "Introduction to Rairb, a key contributor to the DeadCakeMix project.",
                featured: true,
                url: "/blog/08-09-2024-2"
            }
        ];

        function renderBlogs() {
            const searchQuery = document.getElementById('search-bar').value.toLowerCase();
            const featuredBlogsContainer = document.getElementById('featured-blogs');
            const recentBlogsContainer = document.getElementById('recent-blogs');

            featuredBlogsContainer.innerHTML = '';
            recentBlogsContainer.innerHTML = '';

            blogs.forEach(blog => {
                if (blog.title.toLowerCase().includes(searchQuery) ||
                    blog.date.toLowerCase().includes(searchQuery) ||
                    blog.tags.some(tag => tag.toLowerCase().includes(searchQuery))) {
                    
                    const blogCard = `
                        <div class="blog-card bg-gray-900 p-6 rounded-lg shadow-lg">
                            <img src="${blog.thumbnail}" class="w-full h-40 object-cover mb-4 rounded-lg">
                            <h3 class="text-xl font-bold text-white mb-2">${blog.title}</h3>
                            <p class="text-gray-400 mb-2">${blog.description}</p>
                            <div class="text-gray-500 mb-2">Tags: ${blog.tags.map(tag => `<span class="text-blue-400">${tag}</span>`).join(', ')}</div>
                            <div class="text-gray-500">Date: ${blog.date}</div>
                            <a href="${blog.url}" class="text-blue-400 hover:underline mt-4 inline-block">Read More</a>
                        </div>
                    `;

                    
                    if (blog.featured) {
                        featuredBlogsContainer.innerHTML += blogCard;
                        recentBlogsContainer.innerHTML += blogCard;
                    } else {
                        recentBlogsContainer.innerHTML += blogCard;
                    }
                }
            });
        }

        document.getElementById('search-bar').addEventListener('input', renderBlogs);

        // Initial render
        renderBlogs();
    