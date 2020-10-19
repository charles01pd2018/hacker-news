import React from 'react';


export default Item = ({item, onRemoveItem}) => {

    const handleRemoveItem = () => onRemoveItem(item);
  
    return (
      <div className={styles.item}>
        <span className={styles.itemLink}>
          <a href={item.url}>{item.title}</a>
        </span>
  
        <span className={styles.itemAuthor}>{item.author}</span>
        <span className ={styles.itemAttribute}>{item.num_comments}</span>
        <span className={styles.itemAttribute}>{item.points}</span>
  
        <span className={styles.itemAttribute}>
          <button type='button' onClick={handleRemoveItem} className={`${styles.button} ${styles.buttonSmall}`}>
            <Check className={styles.check}/>
          </button>
        </span>
      </div>
      );
  }