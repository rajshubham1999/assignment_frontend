import React from 'react'
import image1 from "../../asserts/img1.png"
import img2 from "../../asserts/img2.png";
import img3 from "../../asserts/img3.png"
import topic from "../../asserts/topic.png"
import img5 from "../../asserts/img5.png"
import user from "../../asserts/user.png"
import fashion from "../../asserts/fashion.png"
import img6 from "../../asserts/img6.png"
import img7 from "../../asserts/img7.png"
import img8 from "../../asserts/img8.png"
import cimg1 from "../../asserts/cimg1.png";
import cimg2 from "../../asserts/cimg2.png"
import cimg3 from "../../asserts/cimg3.png"
import cimg4 from "../../asserts/cimg4.png"
import fashionicon from "../../asserts/fashion2.png"
import sb1 from "../../asserts/smallbox-1.png";
import sm2 from "../../asserts/sm2.png";
import sm3 from "../../asserts/sm3.png";
import sm4 from "../../asserts/sm4.png"
import dateimg from "../../asserts/date1.png";
import lifestyle from "../../asserts/Lifestyle.png"
import sb21 from "../../asserts/s01.png";
import sb22 from "../../asserts/s02.png";
import sb23 from "../../asserts/s03.png";
import sb24 from "../../asserts/s04.png";
import tech from "../../asserts/Tech.png";
import sb31 from "../../asserts/sb31.png";
import sb32 from "../../asserts/sb32.png";
import sb33 from "../../asserts/sb33.png";
import sb34 from "../../asserts/sb34.png";
import checkout from "../../asserts/checkout-img.png"
import donmiss from "../../asserts/donmiss.png";
import pic1 from "../../asserts/pic1.png"
import dd from "../../asserts/dd.png";
import lasttech from "../../asserts/techlast.png"
import pict from "../../asserts/pict.png"
import s1 from "../../asserts/s0001.png"
import s2 from "../../asserts/s0002.png";
import s3 from "../../asserts/s0003.png"
import s4 from "../../asserts/s0004.png"
import bximage from "../../asserts/bximage.png"
import bxtext from "../../asserts//bxtext.png"
import image from "../../asserts/iii.png"
import bbx from "../../asserts/box.png"
import magzine from "../../asserts/magzinelogo.png"
import { useNavigate } from 'react-router-dom';


import './home.css'

function Home() {
    const navigate = useNavigate();

    const handlechange=()=>{
        navigate("/fashion");
    }
    return (
        <div className='main'>
            <div className='container-left'>
                <div className='first'>
                    <div className='left'>
                        <img onClick={handlechange} src={image1} alt="image1" />

                    </div>
                    <div className='right'>
                        <div className='upper'>
                            <img src={img2} alt="image2" />
                        </div>
                        <div className='down'>
                            <img src={img3} alt="image3" />
                        </div>
                    </div>
                </div>

            </div>
            <div className="second">
                <div className='second-left'>
                    <div className='left-up'>
                        <img src={topic} alt="topic" />
                    </div>
                    <div className='left-down'>
                        <div className='down-left'>
                            <img src={img5} alt="icon" />
                        </div>
                        <div className='down-right'>
                            <div className='obj'>
                                <div className='content'>Which camera is better: the Pixel 6 vs S21 Ultra?</div>
                                <div className='user'>
                                    <img src={user} alt="" />
                                </div>
                            </div>

                            <div className='obj'>
                                <div className='content'>Truth About Beauty In 3 Little Words</div>
                                <div className='user'>
                                    <img src={user} alt="" />
                                </div>
                            </div>
                            <div className='obj'>
                                <div className='content'>This is the sixth warmest year on record for the planet.</div>
                                <div className='user'>
                                    <img src={user} alt="" />
                                </div>
                            </div>
                            <div className='obj'>
                                <div className='content'>The source of Horizon bottled water is the subject of a fierce feud.</div>
                                <div className='user'>
                                    <img src={user} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='second-right'>
                    <div className='right-up'>
                        <img src={fashion} alt="icon" />
                    </div>
                    <div className='right-middle'>
                        <img src={img6} alt="icon" />
                    </div>

                    <div className='right-down'>
                        <img src={img7} alt="icon" />
                    </div>
                </div>
            </div>
            <div className='Third'>
                <div className='thirdupper'>
                    <img src={img8} alt="icon" />
                </div>
                <div className='thirddown'>
                    <div className='crousel'>
                        <img src={cimg1} alt="" />
                    </div>
                    <div className='crousel'>
                        <img src={cimg2} alt="" />
                    </div>
                    <div className='crousel'>
                        <img src={cimg3} alt="" />
                    </div>
                    <div className='crousel'>
                        <img src={cimg4} alt="" />
                    </div>
                </div>

            </div>
            <div className='fourth'>
                <div className='fourthleft'>
                    <div className='fourthfirst'>
                        <img src={fashionicon} alt="icon" />
                    </div>

                    <div className='fourthsecond'>
                        <div className='smallbox'>
                            <div className='imagebox'>
                                <img src={sb1} alt="icon" />
                            </div>
                            <div className='textbox'>
                                <div className='maintext'>
                                    Truth About Beauty In 3 Little Words
                                </div>
                                <div className='date'>
                                    <img src={dateimg} alt="icon" />
                                </div>
                            </div>

                        </div>
                        <div className='smallbox'>
                            <div className='imagebox'>
                                <img src={sm2} alt="icon" />
                            </div>
                            <div className='textbox'>
                                <div className='maintext'>
                                    The Hidden Mystery Behind Fashion
                                </div>
                                <div className='date'>
                                    <img src={dateimg} alt="icon" />
                                </div>
                            </div>

                        </div>
                        <div className='smallbox'>
                            <div className='imagebox'>
                                <img src={sm3} alt="icon" />
                            </div>
                            <div className='textbox'>
                                <div className='maintext'>
                                    How To Become Better With Magazine In 10 Minutes
                                </div>
                                <div className='date'>
                                    <img src={dateimg} alt="icon" />
                                </div>
                            </div>

                        </div>
                        <div className='smallbox'>
                            <div className='imagebox'>
                                <img src={sm4} alt="icon" />
                            </div>
                            <div className='textbox'>
                                <div className='maintext'>
                                    Facts Everyone Should Know About Design
                                </div>
                                <div className='date'>
                                    <img src={dateimg} alt="icon" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='fourthmiddle'>
                    <div className='fourthfirst'>
                        <img src={lifestyle} alt="icon" />
                    </div>

                    <div className='fourthsecond'>
                        <div className='smallbox'>
                            <div className='imagebox'>
                                <img src={sb21} alt="icon" />
                            </div>
                            <div className='textbox'>
                                <div className='maintext'>
                                    Why should you be eating Organic ?
                                </div>
                                <div className='date'>
                                    <img src={dateimg} alt="icon" />
                                </div>
                            </div>

                        </div>
                        <div className='smallbox'>
                            <div className='imagebox'>
                                <img src={sb22} alt="icon" />
                            </div>
                            <div className='textbox'>
                                <div className='maintext'>
                                    Solo Travel Around the World
                                </div>
                                <div className='date'>
                                    <img src={dateimg} alt="icon" />
                                </div>
                            </div>

                        </div>
                        <div className='smallbox'>
                            <div className='imagebox'>
                                <img src={sb23} alt="icon" />
                            </div>
                            <div className='textbox'>
                                <div className='maintext'>
                                    How to Acquire a Job as a Costume Designer in Hollywood.
                                </div>
                                <div className='date'>
                                    <img src={dateimg} alt="icon" />
                                </div>
                            </div>

                        </div>
                        <div className='smallbox'>
                            <div className='imagebox'>
                                <img src={sb24} alt="icon" />
                            </div>
                            <div className='textbox'>
                                <div className='maintext'>
                                    Best Way to have Fun During Roadtrip
                                </div>
                                <div className='date'>
                                    <img src={dateimg} alt="icon" />
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
                <div className='forthright'>
                    <div className='fourthfirst'>
                        <img src={tech} alt="icon" />
                    </div>

                    <div className='fourthsecond'>
                        <div className='smallbox'>
                            <div className='imagebox'>
                                <img src={sb31} alt="icon" />
                            </div>
                            <div className='textbox'>
                                <div className='maintext'>
                                    Which camera is better: the Pixel 6 vs S21 Ultra?
                                </div>
                                <div className='date'>
                                    <img src={dateimg} alt="icon" />
                                </div>
                            </div>

                        </div>
                        <div className='smallbox'>
                            <div className='imagebox'>
                                <img src={sb32} alt="icon" />
                            </div>
                            <div className='textbox'>
                                <div className='maintext'>
                                    Prioritizing Your Trend To Get Your Business
                                </div>
                                <div className='date'>
                                    <img src={dateimg} alt="icon" />
                                </div>
                            </div>

                        </div>
                        <div className='smallbox'>
                            <div className='imagebox'>
                                <img src={sb33} alt="icon" />
                            </div>
                            <div className='textbox'>
                                <div className='maintext'>
                                    Intelligent Strategies For The Entrepreneurially Challenged
                                </div>
                                <div className='date'>
                                    <img src={dateimg} alt="icon" />
                                </div>
                            </div>

                        </div>
                        <div className='smallbox'>
                            <div className='imagebox'>
                                <img src={sb34} alt="icon" />
                            </div>
                            <div className='textbox'>
                                <div className='maintext'>
                                    Intel looks to Ohio for a pair of chip factories
                                </div>
                                <div className='date'>
                                    <img src={dateimg} alt="icon" />
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
            <div className='checkout'>
                <img src={checkout} alt="icon" />
            </div>
            <div className='lastbox'>
                <div className='lastbox-left'>
                    <div className='lasstboxupper'>
                        <img src={donmiss} alt="" />
                    </div>
                    <div className='lastboxdown'>
                        <div className='boxes'>
                            <div className='lastboxdownleft'>
                                <img src={pic1} alt="icon" />
                            </div>
                            <div className="lastboxdownright">
                                <div className='one'>
                                    Truth About Beauty In 3 Little Words
                                </div>
                                <div className='two'>
                                    <img src={dd} alt="icon" />
                                </div>
                                <div className='three'>
                                    Most of us have, at some point, considered what we would do if we could travel back in time. Maybe…
                                </div>
                            </div>
                        </div>
                        <div className='boxes'>
                            <div className='lastboxdownleft'>
                                <img src={s1} alt="icon" />
                            </div>
                            <div className="lastboxdownright">
                                <div className='one'>
                                Associated with online buying, which.
                                </div>
                                <div className='two'>
                                    <img src={dd} alt="icon" />
                                </div>
                                <div className='three'>
                                Most of us have, at some point, considered what we would do if we could travel back in time. Maybe…
                                </div>
                            </div>
                        </div>
                        <div className='boxes'>
                            <div className='lastboxdownleft'>
                                <img src={s2} alt="icon" />
                            </div>
                            <div className="lastboxdownright">
                                <div className='one'>
                                    Truth About Beauty In 3 Little Words
                                </div>
                                <div className='two'>
                                    <img src={dd} alt="icon" />
                                </div>
                                <div className='three'>
                                    Most of us have, at some point, considered what we would do if we could travel back in time. Maybe…
                                </div>
                            </div>
                        </div>
                        <div className='boxes'>
                            <div className='lastboxdownleft'>
                                <img src={s3} alt="icon" />
                            </div>
                            <div className="lastboxdownright">
                                <div className='one'>
                                    Truth About Beauty In 3 Little Words
                                </div>
                                <div className='two'>
                                    <img src={dd} alt="icon" />
                                </div>
                                <div className='three'>
                                    Most of us have, at some point, considered what we would do if we could travel back in time. Maybe…
                                </div>
                            </div>
                        </div>
                        <div className='boxes'>
                            <div className='lastboxdownleft'>
                                <img src={s4} alt="icon" />
                            </div>
                            <div className="lastboxdownright">
                                <div className='one'>
                                    Truth About Beauty In 3 Little Words
                                </div>
                                <div className='two'>
                                    <img src={dd} alt="icon" />
                                </div>
                                <div className='three'>
                                    Most of us have, at some point, considered what we would do if we could travel back in time. Maybe…
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
                <div className='lastbox-right'>
                    <div className='lastboxrightupperhalf'>
                        <div className='lastboxrightheading'>
                            <img src={lasttech} alt="icon"/>
                        </div>
                        <div className='picture'>
                            <img src={pict} alt="icon"/>
                        </div>
                        <div className='rightupperbox'>
                            <div className='look'>
                                <img src={bximage} alt="icon"/>
                            </div>
                            <div className='looktext'>
                                <div className='normaltext'>
                                Prioritizing Your Trend To Get Your Business
                                </div>
                                <div className='ddd'>
                                    <img src={bxtext} alt="icon"/>
                                </div>

                            </div>
                        </div>
                        <div className='rightupperbox'>
                            <div className='look'>
                                <img src={image} alt="icon"/>
                            </div>
                            <div className='looktext'>
                                <div className='normaltext'>
                                Intelligent Strategies For The Entrepreneurially Challenged
                                </div>
                                <div className='ddd'>
                                    <img src={bxtext} alt="icon"/>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='lastrightdownbox'>
                        <img src={bbx} alt="icon"/>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <div className='magzinelogobox'>
                    <div className='magzine-logo'>
                        <img src={magzine} alt="logo"/>
                    </div>
                   
                </div>
                <div className='copyright'>
                Copyright © 2023 Magazine - Powered by Rishi Theme
                </div>

            </div>
        </div>
    )
}

export default Home