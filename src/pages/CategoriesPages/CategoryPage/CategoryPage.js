import React from 'react'
import articlesArray from '../../../components/Articles/articlesArray'
import Grid from '@material-ui/core/Grid'
import ArticlesListItem from '../../../components/Articles/ArticlesListItem'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    h3: {
        fontSize: '38px',
        fontFamily: 'Lato',
        fontWeight: '700',
        textAlign: 'center',
        color: 'white',
        textTransform: 'capitalize',
    },

    blackFont: {
        backgroundColor: 'black',
    },
})

const CategoryPage = ({ categoryName }) => {
    const classes = useStyles()
    const newArr = articlesArray.filter((x) => x.category === categoryName)
    return (
        <>
            <Grid className={classes.blackFont}>
                <h3 className={classes.h3}>Category: {categoryName}</h3>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    {newArr.map(
                        ({
                            id,
                            image,
                            category,
                            text,
                            date,
                            likes,
                            comments,
                        }) => (
                            <Grid key={id} item xs={12} sm={6} md={4}>
                                <ArticlesListItem
                                    id={id}
                                    image={image}
                                    category={category}
                                    text={text}
                                    date={date}
                                    likes={likes}
                                    comments={comments}
                                />
                            </Grid>
                        )
                    )}
                </Grid>
            </Grid>
        </>
    )
}

export default CategoryPage
