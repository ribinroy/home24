import React from 'react';
import { Article } from './types';

const intlNumberFormatValues = ['de-DE', 'currency', 'EUR'];

export const formatter = new Intl.NumberFormat(intlNumberFormatValues[0], {
    style: intlNumberFormatValues[1],
    currency: intlNumberFormatValues[2],
});

const ArticleCard = ({ article }: { article: Article }) => {
    return (
        <div className='article'>
            <img src={article.images[0].path} />
            <div className='name'>{article.name}</div>
            <div className='price'>
                {formatter.format(article.prices.regular.value / 100)}
            </div>
            <button>Add to cart</button>
        </div>
    );
};

export default ArticleCard;
