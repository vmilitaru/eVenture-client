import React, { useState } from 'react'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate'
import { makeStyles } from '@material-ui/core/styles'
import Button from '../Button/Button'
import { useAuth0 } from '@auth0/auth0-react'
import { serverUrl } from '../../environment/index'

const useStyles = makeStyles(() => ({
    input: {
        display: 'none'
    }
}))

const UploadImage = () => {
    const classes = useStyles()
    const [selectedImage, setSelectedImage] = useState(null)
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()

    console.log(selectedImage)

    const handleChange = (e) => {
        setSelectedImage(e.target.files[0])
        console.log(e.target.files[0])
    }

    async function handleImageUpload(event) {
        if (user && isAuthenticated) {
            const accessToken = await getAccessTokenSilently()
            //console.log(accessToken)
            event.preventDefault()
            //console.log('clicked')
            if (!selectedImage) return
            //console.log(selectedImage)
            let formData = new FormData()
            let body = new FormData()
            //console.log(formData)
            formData.append('image',selectedImage)
            //console.log (uploadedImage)
            //console.log(selectedImage)
            /* let requestOptions = {
                mode: 'cors',
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    // Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                    'Access-Control-Allow-Origin': '*' 
                },
                body: formData
            } */
            const response = await fetch(` ${serverUrl}/org`, {
                mode: 'cors',
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    // Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                    'Access-Control-Allow-Origin': '*' 
                },
                body: formData
            })
            const data = await response.json()
            console.log(data)
            //event.target.reset()
        }
    }

    /* const  handleImageUpload = () => {
        if (!setSelectedImage) return
        
            const formData = new FormData()
            formData.append('image',selectedImage)
            console.log(selectedImage)
            const uploadedImage = handleSubmit(formData)
            console.log(uploadedImage) 
            .then(uploadedImage =>{
                console.log (uploadedImage);
            }).catch(()=>{
                console.log('Something went wrong!')
            }) 
         
        
    } 
 */

    return (
        <>
            
            <CardContent>
                <Grid container justify="center" alignItems="center">
                
                <form
                id='formElem'
                noValidate
                autoComplete="off"
                onSubmit={(event) => handleImageUpload(event)}
            >
                <input
                    onChange={handleChange}
                    accept=".png"
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
        </>
    )
}
export default UploadImage
