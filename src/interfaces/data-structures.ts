export interface Article {
    articleId: string,
    title: string,
    categoryId: string,
    tags: string[],
    references: string[],
    publishDate: Date,
    modifiedDate: Date,
    contentUri: string
}
export interface Category {
    categoryId: string,
    categoryName: string
}