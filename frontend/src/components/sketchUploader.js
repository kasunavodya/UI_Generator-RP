 import '../assets/css/file-uploader.css';
 
 export const FileUploader = ({ }) => {
 
     return (
         <div>
             <form method="post" action="#" id="#">
                 <div className="form-group files">
                     <input type="file"
                         className="form-control"
                         multiple
                         required
                     />
                 </div>
             </form>
         </div>
     )
 };