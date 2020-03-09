export default function handleScroll(e) {
    return setScrollInfo(useIndicator(Math.round((e.target.scrollTop / e.target.scrollHeight) * 100)));

    function useIndicator(scrollValue) {
        let value = 1;

        if (scrollValue === 0) {
            value = 1;
        }
        else if (scrollValue >= 33 && scrollValue < 66) {
            value = 2;
        }
        else if (scrollValue >= 66) {
            value = 3;
        }

        return value;
    }
}
