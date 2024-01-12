import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { TfiArrowCircleLeft } from 'react-icons/tfi';
import { TfiArrowCircleRight } from 'react-icons/tfi';
import { RiFilter2Fill } from 'react-icons/ri';
import City from './City';

export default function Travel() {
    return (
        <div className='travolmain'>
                <div className='travolpg'>
                    <div className='nvv'>
                        <div className='nvv-1'>
                            <div className='nvv-11'>
                                <div>
                                    <img src="./img/un.png" alt='un' className='nv1img' />
                                </div>
                                <h6>United States</h6>
                            </div>
                            <div className='nvv-12'>
                                <IoMdArrowDropdown className='downarw' />
                                <h6>Sign up</h6>
                            </div>
                        </div>
                        <div className='nvv-2'>
                            <div className='nvv-21'>
                                <div className='nvv-11 '>
                                    <BsTelephoneFill className='callemoji' />
                                    <h6>Call: +103-456-7890</h6>
                                </div>
                                <div className='nvv-11'>
                                    <MdEmail className='mailemoji' />
                                    <h6>trovolcompany.gmail.com</h6>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='middpart'>
                        <div className='middpart-1'>
                            <div className='middnav'>
                                <div className='middnav-1'>
                                    <h1>TROVOL</h1>
                                </div>
                                <div className='middnav-2'>
                                    <ul>
                                        <li>HOME</li>
                                        <li>ABOUT</li>
                                        <li>PAKAGES</li>
                                        <li>CLIENT</li>
                                        <li>BLOG</li>
                                        <li>CONTACT US</li>
                                    </ul>
                                </div>
                                <div className='middnav-3'>
                                    <div>
                                        < BsFillPersonFill className='emoji-person' />
                                    </div>
                                    <div >
                                        < BiSearch className='emoji-person' />
                                    </div>
                                </div>
                            </div>
                            <div className='centerpart'>
                                <div className='centerr-1'>
                                    <h2>NOW START</h2>
                                    <h2>YOUR TRAVELING</h2>
                                </div>
                                <div className='centerr-2'>
                                    <div className='centerr-21'>
                                        <TfiArrowCircleLeft className='leftarrw' />
                                    </div>
                                    <div className='centerr-22'>
                                        The purpose of lorem ipsum is to create a natural looking block of text sentence, paragraph, page, etc. that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content. The purpose of lorem ipsum is to create a natural looking block of text sentence, paragraph, page, etc. that doesn't distract from the layout.A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.
                                    </div>

                                    <div className='centerr-23'>
                                        < TfiArrowCircleRight className='rightarrw' />
                                    </div>

                                </div>
                                <div className='centerr-3'>
                                    <button className='btn readmore'>READ MORE</button>
                                    <button className='btn readmore'>CONTACT US</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='greenpart'>
                    </div>
                    <div className='whitediv shadow'>
                        <h4>OUR PACKAGES</h4>
                        <div className='destdiv'>
                            <div className='destdiv-1'>
                                <label><h6>Select Your Destination :</h6></label>
                                <input type='text' className='destdiv-1input' placeholder='All Destinations' />
                            </div>
                            <div className='destdiv-1'>
                                <label><h6>Select Your Destination :</h6></label>
                                <input type='text' className='destdiv-1input' placeholder='dd/mm/yyyy' />
                            </div>
                            <div className='destdiv-1'>
                                <label><h6>Select Your Destination :</h6> </label>
                                <input type='text' className='destdiv-1input' placeholder='1234' />
                            </div>
                        </div>
                        <button type='button' className='btn searchbtn'>SEARCH</button>
                    </div>
                    <div className='filterdiv'>
                        <div className='fill-1'>
                            <RiFilter2Fill />
                            More Filters
                        </div>
                        <div className='fill-2 shadow'>

                            <div>
                                <h5>TYPOLOGIES :</h5>
                                <input type="radio" id="html" name="typologies" value="RETRO" /> &nbsp;
                                <label htmlFor="retro">Retro</label><br />
                                <input type="radio" id="cultural" name="typologies" value="CULTURAL" /> &nbsp;
                                <label htmlFor="cultural">CULTURAL</label><br />
                                <input type="radio" id="sport" name="typologies" value="SPORT" /> &nbsp;
                                <label htmlFor="sport">Sport</label><br/>
                                <input type="radio" id="history" name="typologies" value="HISTORY" /> &nbsp;
                                <label htmlFor="history">History</label><br/>
                            </div>

                            <div>
                                <h5>DURATIONS :</h5>
                                <input type="radio" id="html" name="durations" value="RETRO" /> &nbsp;
                                <label htmlFor="retro">2-4 Days</label><br />
                                <input type="radio" id="cultural" name="durations" value="CULTURAL" /> &nbsp;
                                <label htmlFor="cultural">2-3 Days</label><br />
                                <input type="radio" id="sport" name="durations" value="SPORT" /> &nbsp;
                                <label htmlFor="sport">2-3 Days</label><br/>
                                <input type="radio" id="history" name="durations" value="HISTORY" /> &nbsp;
                                <label htmlFor="history">2-6 Days</label><br/>
                            </div>

                            <div>
                                <h5>DIFFICULTY :</h5>
                                <input type="radio" id="html" name="difficulty" value="RETRO" /> &nbsp;
                                <label htmlFor="retro">High</label><br />
                                <input type="radio" id="cultural" name="difficulty" value="CULTURAL" /> &nbsp;
                                <label htmlFor="cultural">Low</label><br />
                                <input type="radio" id="sport" name="difficulty" value="SPORT" /> &nbsp;
                                <label htmlFor="sport">Medium</label><br/>
                            </div>

                            <div>
                                <h5>MIN AGE :</h5>
                                <input type="radio" id="html" name="minage" value="RETRO" /> &nbsp;
                                <label htmlFor="retro">10 Years</label><br />
                                <input type="radio" id="cultural" name="minage" value="CULTURAL" /> &nbsp;
                                <label htmlFor="cultural">25 Years</label><br />
                                <input type="radio" id="sport" name="minage" value="SPORT" /> &nbsp;
                                <label htmlFor="sport">40 Years</label><br/>
                                
                            </div>
                        </div>
                    </div>
                </div>
                 <div className='worldpg'>
                     <div className='worldpackage'>
                         <h2>World Place Packages</h2>
                          <div className='grendash'></div>
                     </div>
                     <div className='worldgrid'>
                           <City city="Tuscany" con="Italy" ctyimg="./img/tuscany.jfif" 
                             descrip="Tuscany is best known for its rolling hills, which are populated by golden vineyards and can often be found on postcards and prints of Italy. Other famous sights to see in Tuscany include its many medieval hilltop towns, its capital city of Florence (known as Firenze in Italian), and its rich red Chianti wines."
                           />


                           <City city="Paris" con="France" ctyimg="./img/paris.jfif"
                             descrip="Paris is known worldwide for the Louvre Museum, Notre-Dame cathedral, and the Eiffel tower. It has a reputation of being a romantic and cultural city. The city is also known for its high-quality gastronomy and the terraces of its cafés.widely known as “the city of love”."
                           />


                           <City city="San Francisco" con="USA" ctyimg="./img/sanfransico.jfif"
                             descrip="San Francisco is a city in the state of California in the United States. It is in the northern part of California, between the Pacific Ocean and San Francisco Bay. San Francisco is the 4th largest city in California and the 17th largest city in the United States."
                           />


                           <City city="Melbourne" con="Australia"
                           
                            ctyimg="./img/melbourne.jfif"
                             descrip="Melbourne is the capital of the Australian state of Victoria, and the second-most populous city in Australia. Melbourne, has being crowned has the “World's Most Liveable City”. Melbourne  offers an awesome arts and culture scene, first-rate universities and an easy lifestyle. "
                           />
                     </div>
                </div>  
    </div>
    )
}
