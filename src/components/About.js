import React, {useState} from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle]= useState({
    //     color: 'black',
    //     backgroundColor:'white',
       
    // })
    let myStyle = {
      color: props.mode === 'dark'? 'white':'#042743',
      backgroundColor: props.mode === 'dark'? 'rgb(36 74 104)':'white',
      // border:'2px solid',
      // borderColor: props.mode === 'dark'? 'white':'#042743'
    }


    // const [btntext, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = () =>{
    //     if(myStyle.color ==='black'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor:'black',
    //              border: '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //          setMyStyle({
    //             color: 'black',
    //             backgroundColor:'white'
    //         })
    //          setBtnText("Enable Dark Mode")
    //     }
    // }
  return (
    <div className="container" >
        <h1 className='my-3' style={{color: props.mode === 'dark'? 'white':'#042743'}}>About Us</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyse your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       Textutils gives you a way to analyse your text quickle and efficiently.
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        Textutils is a free character counter tool that provides instant character count and word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
    </div>
  </div>
</div>

    </div>
    </div>
  )
}
