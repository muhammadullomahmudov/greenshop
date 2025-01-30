import React from "react";
import "./OurBlog.css";
import blog1 from '../../assets/blog1.png';
import blog2 from '../../assets/blog2.png';
import blog3 from '../../assets/blog3.png';
import blog4 from '../../assets/blog4.png';

const OurBlog = () => {
    const posts = [
        {
            id: 1,
            title: "Cactus & Succulent Care Tips",
            description: "Cacti and succulents are easy-care plants for any home or patio.",
            date: "September 12",
            readTime: "6 minutes",
            image: blog1,
        },
        {
            id: 2,
            title: "Top 10 Succulents for Your Home",
            description: "Best in hanging baskets. Prefers medium to high light.",
            date: "September 13",
            readTime: "2 minutes",
            image: blog2,
        },
        {
            id: 3,
            title: "Cacti & Succulent Care Tips",
            description: "Cacti and succulents thrive in containers and are easy to maintain.",
            date: "September 15",
            readTime: "3 minutes",
            image: blog3,
        },
        {
            id: 4,
            title: "Best Houseplants Room By Room",
            description: "The benefits of houseplants are endless. They purify the air and brighten any space.",
            date: "September 15",
            readTime: "2 minutes",
            image: blog4,
        },
    ];

    return (
        <div className="blog-section">
            <div className="container blog-container">
                <h2>Our Blog Posts</h2>
                <p className="subtitle">
                    We are an online plant shop offering a wide range of cheap and trendy plants.
                </p>
                <div className="blog-grid">
                    {posts.map((post) => (
                        <div className="blog-card" key={post.id}>
                            <img src={post.image} alt={`Image for blog post: ${post.title}`} />
                            <div className="blog-content">
                                <p className="date">
                                    {post.date} | Read in {post.readTime}
                                </p>
                                <h4>{post.title}</h4>
                                <p className="description">{post.description}</p>
                                <a href={`#post-${post.id}`} className="read-more">
                                    Read More →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurBlog;
