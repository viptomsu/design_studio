import HeroHeader from '../../components/HeroHeader';
import Card from '../../components/Card';
import './Blog.scss';

function Blog() {
	const posts = Array(5).fill({
		title: 'Post Title',
		based: 'Photography . Visual Design . Artwork',
		img: 'https://www.gifdesignstudios.com/img/GIF-Studio-Gallery-02.jpg'
	})
	return (
		<main className='blog'>
			<HeroHeader
				heading={'Design Ideas & Inspiration'}
				slogan='Simplicity in Design'
			/>
			<div className="blog__posts">
				{posts.map((post, index) =>
					<Card
						key={index}
						{...post}
					/>
				)}
			</div>
		</main>
	)
}

export default Blog;
