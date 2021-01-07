import React from 'react'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate'
import { makeStyles } from '@material-ui/core/styles'
import Image from 'next/image'
import { flexbox } from '@material-ui/system'

const useStyles = makeStyles(() => ({
    input: {
        display: 'none'
    }
}))

const UploadImage = ({ handleFileInputChange, previewSource,setPreviewSource }) => {
    const classes = useStyles()

    function deletePreviewBanner(){
        setPreviewSource (null)
    }


    return (
        <div>
            {previewSource && (
                <div>
                    <IconButton aria-label="Delete" onClick={deletePreviewBanner}>
                        <DeleteIcon />
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
                        <Fab component="span">
                            <AddPhotoAlternateIcon />
                        </Fab>
                    </label>
                </div>
            )}
            {previewSource && (
                <Image
                    src={previewSource}
                    alt="Event Image"
                    width={400}
                    height={400}
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
