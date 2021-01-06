import React, { useState } from 'react'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate'
import { makeStyles } from '@material-ui/core/styles'
import Button from '../Button/Button'
import Image from 'next/image'
import { useAuth0 } from '@auth0/auth0-react'
import { serverUrl } from '../../environment/index'

const useStyles = makeStyles(() => ({
    input: {
        display: 'none'
    }
}))

const UploadImage = () => {
    const classes = useStyles()
    /* const [imageInputState, setImageInputState] = useState('') */
    const [selectedImage, setSelectedImage] = useState('')
    const [previewSource, setPreviewSource] = useState('')
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()

    //console.log(imageInputState)

    const handleFileInputChange = (e) => {
        const file = e.target.files[0]
        previewImage(file)
        setSelectedImage(file)
    }

    const previewImage = (file) => {
        console.log(file)
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    }

    const handleImageUpload = (e) => {
        e.preventDefault()
        if (!selectedImage) return
        uploadImage(previewSource)
    }

    const uploadImage = async (base64EncodedImage) => {
        console.log(base64EncodedImage)
        if (user && isAuthenticated) {
            const accessToken = await getAccessTokenSilently()
            try {
                let requestOptions = {
                    mode: 'cors',
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    body: JSON.stringify({ banner: base64EncodedImage })
                }
                await fetch(` ${serverUrl}/org`, requestOptions)
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <>
            <CardContent>
                <Grid container justify="center" alignItems="center">
                    <form
                        id="formElem"
                        noValidate
                        autoComplete="off"
                        onSubmit={handleImageUpload}
                    >
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
                        <Button
                            disabled={!selectedImage}
                            text={'Upload'}
                            type="submit"
                        />
                    </form>
                </Grid>
            </CardContent>
            {previewSource && (
                <Image
                    src={previewSource}
                    alt="Event Image"
                    width={400}
                    height={400}
                />
            )}
        </>
    )
}
export default UploadImage
