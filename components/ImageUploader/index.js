import React from 'react'
import Fab from '@material-ui/core/Fab'
import IconButton from '@material-ui/core/IconButton'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
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
        <>
            {previewSource && (
                <IconButton
                    className={classes.icons}
                    aria-label="Delete"
                    onClick={deletePreviewBanner}
                >
                    <DeleteForeverIcon />
                </IconButton>
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
        </>
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
