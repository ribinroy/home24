import React from 'react';
import { Article } from './types';

const intlNumberFormatValues = ['de-DE', 'currency', 'EUR'];

export const formatter = new Intl.NumberFormat(intlNumberFormatValues[0], {
    style: intlNumberFormatValues[1],
    currency: intlNumberFormatValues[2],
});

const ArticleCard = ({
    article,
    index,
}: {
    article: Article;
    index: Nunmber;
}) => {
    return (
        <div
            className='article'
            data-aos='fade-up'
            data-aos-offset='0'
            data-aos-duration={300}>
            <img src={article.images[0].path} />
            <div className='name' title={article.name}>
                {article.name} {index}
            </div>
            <div className='price'>
                {formatter.format(article.prices.regular.value / 100)}
            </div>
            <button>Add to cart</button>
        </div>
    );
};

export default ArticleCard;
