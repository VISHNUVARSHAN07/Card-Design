import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram';
import DoneIcon from '@mui/icons-material/Done';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import FlightIcon from '@mui/icons-material/Flight';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import React from 'react'


const Design = () => {
    return (
        <div className='flex justify-evenly'>
            <Grid container maxWidth="lg" sm={12} spacing={4} marginTop="20px">
                <Grid item xs={12} md={4} sm={12}>
                    <Card className="bg-gradient-to-b from-purple-500 via-pink-500 to-pink-800 hover:scale-105 cursor-pointer" sx={{ borderRadius: "20px", transition: ".5s" }}>
                        <CardContent>
                            <div className='flex justify-center items-center '>
                                <TelegramIcon className='bg-pink-600 rounded-full p-2 text-white' fontSize='large' sx={{ fontSize: "100px" }} />
                            </div>
                            <div className='flex justify-center items-center flex-col'>
                                <Typography variant='h4' className='text-white' sx={{ marginTop: "20px" }}>Basic</Typography><br />
                                <div className='flex'>
                                    <Typography variant='h4' className='text-white'>$</Typography>
                                    <Typography variant='h2' className='text-white'>25</Typography>
                                </div><br />
                                <div className='flex'>
                                    <DoneIcon fontSize='small' className='text-white mt-2' sx={{ stroke: "white" }} />
                                    <Typography className='text-white' sx={{ fontFamily: "unset", fontSize: "23px" }}>10 GB Space </Typography>
                                </div> <br />
                                <div className='flex'>
                                    <DoneIcon fontSize='small' className='text-white mt-2' sx={{ stroke: "white" }} />
                                    <Typography className='text-white ' sx={{ fontFamily: "unset", fontSize: "23px" }}>3 Domain Names </Typography>
                                </div><br />
                                <div className='flex'>
                                    <DoneIcon fontSize='small' className='text-white mt-2' sx={{ stroke: "white" }} />
                                    <Typography variant='h4' className='text-white' sx={{ fontFamily: "unset", fontSize: "23px" }}>20 Email Address</Typography>
                                </div><br />
                                <div className='flex'>
                                    <CloseOutlinedIcon fontSize='small' className='text-white mt-1' sx={{ stroke: "white" }} />
                                    <Typography variant='h4' className='text-white' sx={{ fontFamily: "unset", fontSize: "23px" }}>Live Support</Typography>
                                </div><br />
                                <Button variant='contained' color='inherit' sx={{ borderRadius: "20px", width: "180px" }}>Order now</Button>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} sm={12}>
                    <Card className="bg-gradient-to-b from-orange-700 via-orange-500 to-orange-300 hover:scale-105 cursor-pointer" sx={{ borderRadius: "20px", transition: ".5s" }}>
                        <CardContent>
                            <div className='flex justify-center items-center '>
                                <FlightIcon className='bg-orange-600 rounded-full p-2 text-white' fontSize='large' sx={{ fontSize: "100px" }} />
                            </div>
                            <div className='flex justify-center items-center flex-col'>
                                <Typography variant='h4' className='text-white' sx={{ marginTop: "20px" }}>Standard</Typography><br />
                                <div className='flex'>
                                    <Typography variant='h4' className='text-white'>$</Typography>
                                    <Typography variant='h2' className='text-white'>50</Typography>
                                </div><br />
                                <div className='flex'>
                                    <DoneIcon fontSize='small' className='text-white mt-2' sx={{ stroke: "white" }} />
                                    <Typography className='text-white' sx={{ fontFamily: "unset", fontSize: "23px" }}>50 GB Space </Typography>
                                </div> <br />
                                <div className='flex'>
                                    <DoneIcon fontSize='small' className='text-white mt-2' sx={{ stroke: "white" }} />
                                    <Typography className='text-white ' sx={{ fontFamily: "unset", fontSize: "23px" }}>5 Domain Names </Typography>
                                </div><br />
                                <div className='flex'>
                                    <DoneIcon fontSize='small' className='text-white mt-2' sx={{ stroke: "white" }} />
                                    <Typography variant='h4' className='text-white' sx={{ fontFamily: "unset", fontSize: "23px" }}>Unlimited Email Address</Typography>
                                </div><br />
                                <div className='flex'>
                                    <CloseOutlinedIcon fontSize='small' className='text-white mt-1' sx={{ stroke: "white" }} />
                                    <Typography variant='h4' className='text-white' sx={{ fontFamily: "unset", fontSize: "23px" }}>Live Support</Typography>
                                </div><br />
                                <Button variant='contained' color='inherit' sx={{ borderRadius: "20px", width: "180px" }}>Order now</Button>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} sm={12}>
                    <Card className="bg-gradient-to-b from-cyan-600 via-emerald-400 to-green-400 hover:scale-105 cursor-pointer" sx={{ borderRadius: "20px", transition: ".5s" }}>
                        <CardContent className=''>
                            <div className='flex justify-center items-center '>
                                <RocketLaunchIcon className='bg-cyan-600 rounded-full p-2 text-white' fontSize='large' sx={{ fontSize: "100px" }} />
                            </div>
                            <div className='flex justify-center items-center flex-col'>
                                <Typography variant='h4' className='text-white' sx={{ marginTop: "20px" }}>Premium</Typography><br />
                                <div className='flex'>
                                    <Typography variant='h4' className='text-white'>$</Typography>
                                    <Typography variant='h2' className='text-white'>100</Typography>
                                </div><br />
                                <div className='flex'>
                                    <DoneIcon fontSize='small' className='text-white mt-2' sx={{ stroke: "white" }} />
                                    <Typography className='text-white' sx={{ fontFamily: "unset", fontSize: "23px" }}>Unlimited Space </Typography>
                                </div> <br />
                                <div className='flex'>
                                    <DoneIcon fontSize='small' className='text-white mt-2' sx={{ stroke: "white" }} />
                                    <Typography className='text-white ' sx={{ fontFamily: "unset", fontSize: "23px" }}>50 Domain Names </Typography>
                                </div><br />
                                <div className='flex'>
                                    <DoneIcon fontSize='small' className='text-white mt-1' sx={{ stroke: "white" }} />
                                    <Typography variant='h4' className='text-white' sx={{ fontFamily: "unset", fontSize: "23px" }}>Unlimited Email Address</Typography>
                                </div><br />
                                <div className='flex'>
                                    <DoneIcon fontSize='small' className='text-white mt-1' sx={{ stroke: "white" }} />
                                    <Typography variant='h4' className='text-white' sx={{ fontFamily: "unset", fontSize: "23px" }}>Live Support</Typography>
                                </div><br />
                                <Button variant='contained' color='inherit' sx={{ borderRadius: "20px", width: "180px" }}>Order now</Button>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid >
        </div >
    )
}

export default Design