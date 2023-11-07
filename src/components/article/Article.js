import './Article.css';
import Button from '../button/Button';

function Article(props) {
    return (
        <div className='Article'>

            <img className="Article-img"
                src={props.src}
                alt={props.alt}
            />

            <p className='Article-p'>
                {props.text}
            </p>

            <Button />

        </div>
    );
}

export default Article;