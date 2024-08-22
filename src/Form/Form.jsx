import './Form.css'
import { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  // react-hook-formの使用
  const { register, watch } = useForm();

  // watchでフォームの値を監視し、リアルタイムで取得
  const formData = watch();

  const textNames = [
    { label: '住所', name: 'address' },
    { label: '賃料', name: 'rent' },
    { label: '最寄り駅', name: 'closestStation' },
    { label: '築年数', name: 'builtYears' },
    ];
  const pictureNames = [
    { label: '間取り', index: 0 },
    { label: '内装', index: 1 },
    { label: '外観', index: 2 },
  ];

  // 以下は写真の設定
  const [imagePreviews, setImagePreviews] = useState([null, null, null]);

  const handleImagePreview = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImagePreviews = [...imagePreviews];
        newImagePreviews[index] = reader.result;
        setImagePreviews(newImagePreviews);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="form-all">
      <div className="input-all">
        <h2 className="">入力フォーム</h2>
        <form>
          <div className="input-text-all">
          {textNames.map((text) => {
          return(
            <div key={text.name} className="input-text">
              <label className="inputT-label">{text.label}:</label><br/>
              <input className="inputT-input"  {...register(text.name)} />
            </div>)
          }
          )}
          </div>
          <div className="input-picture-all">
          {pictureNames.map((picture) => {
            return(
              <div key={picture.index} className='input-picture'>
                <label className="iputP-label">{picture.label}:</label><br/>
                <input className="inputP-input"
                  type="file"
                  accept="image/*"
                  {...register(picture.label)}
                  onChange={(event) => handleImagePreview(event, picture.index)}/>
              </div>)
            })
          }
          </div>
        </form>
      </div>

      <h2>Prevew</h2>
      <div className="pre-all">
        {textNames.map((text) => {
          return(
            <div key={text.name} className="pre-text">
              <label className="preT-label">{text.label}:</label><br/>
              <div className="preT-output">
                {formData[text.name] || "未入力です。"}
              </div>
            </div>)
          }
        )}
        {pictureNames.map((picture) => {
          return(
            <div key={picture.index} className="pre-picture">
              <p className="preP-label"><strong>{picture.label} prevew:</strong></p><br/>
              {imagePreviews[picture.index] && (
              <img className="preP-output" src={imagePreviews[picture.index]} alt={`${picture.label}プレビュー`} style={{ maxWidth: "200px" }} />
              )}
            </div>)
          })}
      </div>
    </div>
  );
};

export default Form;
