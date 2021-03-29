const qSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    const [base, ...rest] = arr;
    const less = rest.filter((i) => i <= base);
    const greater = rest.filter((i) => i > base);

    return [...qSort(less), base, ...qSort(greater)];
};

export default qSort;