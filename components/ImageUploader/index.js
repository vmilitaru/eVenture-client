import React from 'react'
import Fab from '@material-ui/core/Fab'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate'


import { useStyles } from './imageuploadermaterialCss'
import styles from './imageuploader.module.css'
const UploadImage = ({
    handleFileInputChange,
    previewSource,
    setPreviewSource
}) => {
    const classes = useStyles()

    function deletePreviewBanner() {
        setPreviewSource(null)
    }

    return (
        <div
            className={styles.uploadImage}
            // style={{ backgroundImage: `url(${previewSource})` }}
        >
            {previewSource && (
                <div className={styles.buttons}>
                    <IconButton
                        aria-label="Delete"
                        onClick={deletePreviewBanner}
                    >
                        <DeleteIcon className={classes.icons} />
                    </IconButton>
                </div>
            )}
            {!previewSource && (
                <div>
                    <input
                        onChange={handleFileInputChange}
                        accept=".png, .jpeg, .jpg"
                        id="contained-button-file"
                        multiple
                        type="file"
                        className={styles.input}
                    />
                    <label htmlFor="contained-button-file">
                        <Fab component="span" className={classes.icons}>
                            <AddPhotoAlternateIcon />
                        </Fab>
                    </label>
                </div>
            )}
            {previewSource && (
                <img
                    src={previewSource}
                    className={styles.image}
                    alt="Event Image"
                />
            )}
        </div>
    )
}
export default UploadImage

/* style={{
    width: '400px',
    height: '400px',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
}} */
