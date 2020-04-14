export default function scrollDirection (current, previous) {
    let direction;

    (current > previous)  ? direction = 'DOWN' : direction = 'UP';

    return direction;
}