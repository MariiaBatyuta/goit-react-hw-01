import css from './Profile.module.css';

export default function Profile({ name: userName, tag, location, image, stats: { followers, views, likes } }) {
    return (
        <div className={css.clientCard}>
            <div>
                <img
                    src={image}
                    alt="User avatar"
                    className={css.photoCard}
                />
                <p className={css.headName}>{userName}</p>
                <p className={css.tagName}>@{tag}</p>
                <p className={css.tagName}>{location}</p>
            </div>

            <ul className={css.infoTab}>
                <li className={css.info}>
                <span>Followers</span>
                <span>{followers}</span>
                </li>
                <li className={css.info}>
                <span>Views</span>
                <span>{views}</span>
                </li>
                <li className={css.info}>
                <span>Likes</span>
                <span>{likes}</span>
                </li>
            </ul>
        </div>
        
    )
    
}