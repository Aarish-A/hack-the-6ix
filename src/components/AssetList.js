import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AssetCard from './AssetCard'

const useStyles = makeStyles({
    assetList: {
        padding: '0px 30px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'space-between', 
    },
    assetGridItem: {
        padding: '5px 34px',
    }
})


const AssetList = ({search, categories, cards}) => { 
    const classes = useStyles()
    
    const renderCards = () => {
        // console.log('CARDS FROM LIST:', JSON.stringify(cards));
        return cards
            .filter(card => {
                // console.log("FILTER", card.data.name, card.thumbnailUrl, JSON.stringify(card))
                let searched = card.data.name.toLowerCase().includes(search.toLowerCase()) || card.data.category.toLowerCase().includes(search.toLowerCase())
                let filtered = categories.length > 0 ? categories.includes(card.data.category) : true
                return searched && filtered
            })
            .map(card => { 
                // console.log("MAP", card.data.name, card.thumbnailUrl, JSON.stringify(card));
                return (
                <div key={card.id} className={classes.assetGridItem}>
                    <AssetCard 
                        name={card.data.name} 
                        category={card.data.category} 
                        date={card.data.date || '00/00/0000'} 
                        value={card.data.value} 
                        thumbnailUrl={card.thumbnailUrl}
                    />
                </div>
            )})

    }   

    return (
        <div className={classes.assetList}>
                {renderCards()}
        </div>
    )
}

export default AssetList