import React from 'react'
import Fab from '@material-ui/core/Fab'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate'
import Image from 'next/image'


import { useStyles } from './imageuploadermaterialCss'
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
            className={classes.UploadImage}
            // style={{ backgroundImage: `url(${previewSource})` }}
        >
            {previewSource && (
                <div>
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
                        className={classes.input}
                    />
                    <label htmlFor="contained-button-file">
                        <Fab component="span" className={classes.icons}>
                            <AddPhotoAlternateIcon />
                        </Fab>
                    </label>
                </div>
            )}
            {previewSource && (
                <Image
                    src={previewSource}
                    alt="Event Image"
                    width="fill"
                    height="auto"
                    // maxWidth="400vw"
                    // maxHeight="400vw"
                    // width={400}
                    // height={400}
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
