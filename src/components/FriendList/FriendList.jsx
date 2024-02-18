import css from '../FriendList/FriendList.module.css';

export default function FriendList({ friends }) {
    return (
        <>
            {friends.map(({id, avatar, name: friendName, isOnline}) => {
                return (
                    <div className={css.friendCard} key={id}>
                        <img src={avatar} alt="Avatar" width="48" className={css.photo} />
                        <p className={css.friendInfo}>{friendName}</p>
                        <p className={isOnline ? css.friendInfo : css.isOffline}>{isOnline ? "Online" : "Offline"}</p>
                    </div>
                )
            })}
        </>
    );
}