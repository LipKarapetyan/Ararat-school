import React, { useContext } from 'react';
import { LanguageContext } from './Component';

function AraratSchool() {
    const { language, changeLanguage } = useContext(LanguageContext);

    const handleLanguageChange = (newLanguage) => {
      changeLanguage(newLanguage);
    };


    return (
        <div className="main">
            <div className="heder">

                <div className='bord'>
            <div><h1>Ait</h1></div>
            </div>
            <div className='aitheder'>
                <ul>
                   <li>{language === 'russian' ? 'Главная' : language === 'english' ? 'Home' : 'Գլխավոր'}</li>
                   <li>{language === 'russian' ? 'Курсы' : language === 'english' ? 'Courses' : 'Դասընթացներ'}</li>
                    <li> {language === 'russian' ? 'Регистрация' : language === 'english' ? 'Registration' : 'Գրանցում'}</li>
                    <li> {language === 'russian' ? 'О нас' : language === 'english' ? 'About Us' : 'Մեր մասին'}</li>
                    <li>{language === 'russian' ? 'Блог' : language === 'english' ? 'Blog' : 'Բլոգ'}</li>
                     <li>{language === 'russian' ? 'Контакты' : language === 'english' ? 'Contact' : 'Կապ'}</li>

                     
                     
                    
                    
                </ul>

                 <button  onClick={() => handleLanguageChange('armenian')}> <img className='jjj'  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Nuvola_Armenian_flag.svg/2048px-Nuvola_Armenian_flag.svg.png" /></button>
                 <button onClick={() => handleLanguageChange('russian')}><img className='jjj'  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/1280px-Flag_of_Russia.svg.png" /></button>
                 <button onClick={() => handleLanguageChange('english')}><img className='jjj'  src="https://em-content.zobj.net/thumbs/120/lg/307/flag-united-kingdom_1f1ec-1f1e7.png"/></button>
              </div>


            </div>

            <div className='araratbody'>
                <div className='scholltext'>
                <h1 className='textschool'>Ararat</h1>
                <h2 className='textait'>It School</h2>
                <p className='text'>{language === 'russian' ? 'Откройте для себя безграничные возможности ИТ' : language === 'english' ? 'Discover the endless possibilities of IT' : 'Բացահայտիր IT անսահման հնարավորությունները'}</p>
                <button className='but'>{language === 'russian' ? 'Курсы' : language === 'english' ? 'Courses' : 'Դասընթացներ'}</button>

             
                </div>

                <div className='scholltimg'>
                    <img className='imgschool'  src="https://www.aitschool.am/images/main_image.png" alt="" />
                </div>
            </div>


            <div className='text2'> 
                <h4 className='h33'>{language === 'russian' ? 'Курсы' : language === 'english' ? 'Courses' : 'Դասընթացներ'}</h4>
            </div>
        <div className='center'>
            <div className='dasyntacdiv'>
                <div className='divdas'>
                    <img className='webcurs' src="https://api.aitschool.am/web_course.png" alt="" />
                    <p>Web {language === 'russian' ? 'программирование' : language === 'english' ? 'programming' : 'ծրագրավորում'}</p>
                    <p>6 {language === 'russian' ? 'месяц' : language === 'english' ? 'month' : 'ամիս'}</p>
                </div>
                <div className='divdas'>
                <img className='webcurs' src="https://api.aitschool.am/ui-ux.png" alt="" />
                    <p>UI/UX</p>
                    <p>2 {language === 'russian' ? 'месяц' : language === 'english' ? 'month' : 'ամիս'}</p>
                </div>
                <div className='divdas'>
                <img className='webcurs' src="https://api.aitschool.am/smm.png" alt="" />
                    <p>SMM</p>
                    <p>2 {language === 'russian' ? 'месяц' : language === 'english' ? 'month' : 'ամիս'}</p>
                </div>
                <div className='divdas'>
                    <img className='webcurs' src="https://api.aitschool.am/graphic-design.png" alt="" />
                    <p> {language === 'russian' ? 'Графический дизайн' : language === 'english' ? 'Graphic Design' : 'Գրաֆիկ Դիզայն'}</p>
                    <p>2 {language === 'russian' ? 'месяц' : language === 'english' ? 'month' : 'ամիս'}</p>
                </div>
                <div className='divdas'>
                <img className='webcurs' src="https://api.aitschool.am/english.png" alt="" />
                    <p>{language === 'russian' ? 'Английский' : language === 'english' ? 'English' : 'Angle8en'}</p>
                    <p>4 {language === 'russian' ? 'месяц' : language === 'english' ? 'month' : 'ամիս'}</p>
                </div>
                <div className='divdas'>
                <img className='webcurs' src="https://api.aitschool.am/kids.blog.webp" alt="" />
                    <p>Ait Kids</p>
                    <p>8 {language === 'russian' ? 'месяц' : language === 'english' ? 'month' : 'ամիս'}</p>
                </div>
                
             
                

            </div>
            </div>

            <div className='masnachux'>
                <h1>{language === 'russian' ? 'Ветви' : language === 'english' ? 'Branches' : 'Մասնաճյուղեր'}</h1>
                
            </div>

            <div className='masnachux2'>
                <div className='ararat'>
                    <img className='nkar' src="https://www.aitschool.am/images/office_ararat.jpg" alt="" />
                    <h3>{language === 'russian' ? 'г.Арарат' : language === 'english' ? 'city, Ararat' : 'Ք.Արարատ'}</h3>
                </div>

                <div className='erevan'>
                <img className='nkar' src="https://www.aitschool.am/images/office_yerevan.jpeg" alt="" />
                <h3>{language === 'russian' ? 'г. Ереван' : language === 'english' ? 'city.Yerevan' : 'ք.երեվան'}</h3>
                </div>
            </div>


            <div className='AitCenter'>
                <h2>{language === 'russian' ? 'Что вам даст АИТ?' : language === 'english' ? 'What will AIT give you?' : 'Ինչ կտա ձեզ AIT-ն'}</h2>
            </div>
        </div>
    )
}

export default AraratSchool