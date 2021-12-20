import React, { useState, useEffect } from 'react';

import ArticleCard from './Card';
import retrieveData from './../../api/retrievedata.api';

import { Category } from './types';
import './styles.scss';

type State = {
    categories: Category[];
};

const ArticleList = () => {
    const [categories, setCategories] = useState<any>([]);

    useEffect(() => {
        retrieveData()
            .then((response) => {
                setCategories(response.data.categories);
            })
            .catch((d) => {
                setCategories([]);
            });
    }, []);

    const articles = categories.map((category: any) => {
        return (
            category &&
            category.categoryArticles &&
            category.categoryArticles.articles &&
            category.categoryArticles.articles.map(
                (article: any, index: number) => {
                    return <ArticleCard key={index} article={article} />;
                }
            )
        );
    });

    return (
        <section className='article_list_box content_box'>
            <div className='sidebar'>
                <h3>Kategorien</h3>
                {categories.length ? (
                    <ul>
                        {categories[0].childrenCategories.map(
                            (item: any, index: number) => {
                                return (
                                    <li key={index}>
                                        <a href={`/${item.urlPath}`}>
                                            {item.name}
                                        </a>
                                    </li>
                                );
                            }
                        )}
                    </ul>
                ) : (
                    'Loading...'
                )}
            </div>

            <div className='content'>
                {categories.length ? (
                    <h1>
                        {categories[0].name}
                        <small> ({categories[0].articleCount})</small>
                    </h1>
                ) : (
                    'Loading...'
                )}
                <div className='articles'>{articles}</div>
            </div>
        </section>
    );
};

export default ArticleList;
