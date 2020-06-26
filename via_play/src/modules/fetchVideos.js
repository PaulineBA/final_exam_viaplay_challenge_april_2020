import React from 'react'
import axios from 'axios'


const fetchvideos = async () => {
  try {
    let response = await axios.get(
      'https://content.viaplay.se/pc-se/serier/samtliga'
    )
    return response.data
  } catch (error) {
    return error
  }
}
export { fetchvideos }