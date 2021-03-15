import React, { useState, Component } from 'react'

function Priduct(props) {
    //   let accepts = ['image/jpeg', 'image/jpg', 'image/png']
    // const [arrImg, setArrImg] = useState([])

    
    
    // const handleUpdate = (event) =>{
    //     if(arrImg.length > 4){
    //         setMsgskbar("最多可以上传5张图片")
    //         setSnackbar({ ...snackbar, open: true })
    //         return false
    //     }
    //     let fileImg =event.target.files[0];
    //     // console.log(fileImg)
    //     Accepts(fileImg)
    //   }
    //     // 图片格式限定
    // const Accepts = (files) => {
    //     if(!files){
    //     return false
    //     }
    //     let type = Array.isArray(accepts) && accepts.indexOf(files.type,0)

    //     if(type >= 0){
    //     if (files.size > 2097152) {
    //         setMsgskbar("上传的文件不能大于2M")
    //         setSnackbar({ ...snackbar, open: true })
    //         return;
    //     }else{
    //         Preview(files)
    // 　　　　}
    // }else{
    //     setMsgskbar("请上传格式为jpg、png，jpeg的图片")
    //     setSnackbar({ ...snackbar, open: true })
    //     }
    // }

    // // 本地预览
    // const Preview = (file) =>{ 
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onload = function (e) {
    //     //   arr添加新数据
    //       setArrImg([...arrImg, this.result])
    //     }
    
    //   }
    return (
        <div>fff</div>
        // <div className={feed.uploadcot}>
        //                         <ul className={feed.uploadimg}>
        //                             {
        //                                 arrImg?.length >0 && arrImg.map((item, index) =>{
        //                                     return(
        //                                         <li key={index}>
        //                                             <img src={item} />
        //                                         </li>
        //                                     )
        //                                 })
        //                             }
                                    
        //                         </ul>
        //                         <div className={feed.upload}>
        //                             <div className={feed.plusA}>
        //                                 <span>+</span>
        //                                 <input type="file" onChange={(event) =>handleUpdate(event)}  className={feed.file}/>
        //                             </div>
        //                         </div>

                            // </div>
    )
}

export default Priduct
