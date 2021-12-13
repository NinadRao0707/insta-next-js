import Post from './Post';

const posts = [
    {
        id: 1,
        username: 'Ninad',
        userImg: 'https://pbs.twimg.com/profile_images/1302896410510069761/pyAcmGHK_400x400.jpg',
        img: 'https://pbs.twimg.com/profile_images/1302896410510069761/pyAcmGHK_400x400.jpg',
        caption: 'My first post !!',
    },
    {
        id: 2,
        username: 'Ninad',
        userImg: 'https://pbs.twimg.com/profile_images/1302896410510069761/pyAcmGHK_400x400.jpg',
        img: 'https://pbs.twimg.com/profile_images/1302896410510069761/pyAcmGHK_400x400.jpg',
        caption: 'My first post !!',
    },
    {
        id: 3,
        username: 'Ninad',
        userImg: 'https://pbs.twimg.com/profile_images/1302896410510069761/pyAcmGHK_400x400.jpg',
        img: 'https://pbs.twimg.com/profile_images/1302896410510069761/pyAcmGHK_400x400.jpg',
        caption: 'My first post !!',
    },
]

function Posts() {
    return (
        <div>
            {posts.map(post => (
                <Post key={post.id} id={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption}/>
            ))}
        </div>
    )
}

export default Posts
