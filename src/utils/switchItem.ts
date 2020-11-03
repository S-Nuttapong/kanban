
export const switchItem = <T>(lists: T[], srcIndex: number, dstIndex: number) => {
    const item = lists.splice(srcIndex, 1)[0]
    lists.splice(dstIndex, 0, item)
    return lists
}