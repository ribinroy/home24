import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ArticleCard from './Card';
import retrieveData from './../../api/retrievedata.api';
import Loader from './../Loader';

import { Category } from './types';
import './styles.scss';

type State = {
    categories: Category[];
};

const ArticleList = () => {
    const [categories, setCategories] = useState<any>([]);
    const [categoryArticles, setCategoryArticles] = useState<any>([]);
    const [searchKey, setSearchKey] = useState<string>('');

    useEffect(() => {
        retrieveData()
            .then((response) => {
                setCategories(response.data.categories);
            })
            .catch((d) => {
                setCategories([]);
            });
    }, []);

    useEffect(() => {
        let newCategoriesArray = [];
        categories.map((category: any) => {
            newCategoriesArray = newCategoriesArray.concat(
                category.categoryArticles.articles
            );
        });

        debugger;
        setCategoryArticles(
            searchKey === ''
                ? newCategoriesArray
                : newCategoriesArray.filter(
                      (el) => el.name.toLowerCase().indexOf(searchKey) > -1
                  )
        );
    }, [searchKey, categories]);

    const debounce = (func, delay) => {
        let debounceTimer;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay);
        };
    };

    return (
        <section className='article_list_box content_box'>
            <div
                className='sidebar'
                data-aos='fade-right'
                data-aos-offset='0'
                data-aos-duration={300}>
                <h3>Kategorien</h3>
                {categories.length ? (
                    <ul>
                        {categories[0].childrenCategories.map(
                            (item: any, index: number) => {
                                return (
                                    <li key={index}>
                                        <Link to={`/${item.urlPath}`}>
                                            {item.name}
                                        </Link>
                                    </li>
                                );
                            }
                        )}
                    </ul>
                ) : (
                    <Loader />
                )}
            </div>

            <div className='content'>
                {categories.length ? (
                    <div className='top_details'>
                        <h1
                            data-aos='fade-left'
                            data-aos-offset='0'
                            data-aos-duration={300}>
                            {categories[0].name}
                            <small> ({categories[0].articleCount})</small>
                        </h1>
                        <input
                            className='search_input'
                            placeholder='Search'
                            onChange={(e) =>
                                setSearchKey(
                                    e.currentTarget.value.toLowerCase()
                                )
                            }
                        />
                    </div>
                ) : (
                    <Loader />
                )}
                <div className='articles'>
                    {categoryArticles.map((article: any, index: number) => {
                        return (
                            <ArticleCard
                                key={index}
                                index={index}
                                article={article}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ArticleList;
