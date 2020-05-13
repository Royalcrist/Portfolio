export default function scrollDirection (current, previous) {
    return (current > previous)  ? 'DOWN' : 'UP';
}