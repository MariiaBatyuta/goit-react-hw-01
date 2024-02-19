import FriendListItem from "../FriendListItem/FriendListItem";
import css from '../FriendList/FriendList.module.css';

export default function FriendList({ friends }) {
    return (
        <>
            <ul>
                {friends.map((friend) => (
                    <li key={friend.id} className={css.friendCard} >
                            <FriendListItem data={friend} />
                    </li>
                ))}
            </ul>
        </>
    )
}