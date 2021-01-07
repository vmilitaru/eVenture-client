import React from 'react'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate'
import { makeStyles } from '@material-ui/core/styles'
import Image from 'next/image'

const useStyles = makeStyles(() => ({
    input: {
        display: 'none'
    }
}))

const UploadImage = ({handleFileInputChange, previewSource}) => {
    const classes = useStyles()

   
   
    return (
        <div style={{ position: 'relative', top: '0px' }}>
            <Card>
                <Grid container justify="center" alignItems="center">
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
                        {previewSource && (
                <Image
                    src={previewSource}
                    alt="Event Image"
                    width={400}
                    height={400}
                />
            )}
                   
                </Grid>
            </Card>
            
        </div>
       
    )
}
export default UploadImage