import contactData from '../data/contacts.json';

function Media() {
    const items = contactData.items;
    const mediaList = items.map(({id}) => {
        return (
        <li key = {id}>
        <img src={`/images/media_${id}.jpg`} />
        </li>
        );
    });

    // 배열 1을 배열 2로 저장 및 반환

    return(
        <ul>{mediaList}</ul>
    )
}

export default Media;