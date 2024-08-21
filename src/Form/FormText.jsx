import { useState } from "react";
import { useForm } from "react-hook-form";

const FormText = () => {
  // react-hook-formの使用
  const { register, watch } = useForm();

  // watchでフォームの値を監視し、リアルタイムで取得
  const formData = watch();

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
    <div>
      <h2>入力フォーム</h2>
      <form>
        <div>
          <label>賃料:</label>
          <input {...register("tingin")} />
        </div>
        <div>
          <label>駅:</label>
          <input {...register("eki")} />
        </div>
        <div>
          <label>築年:</label>
          <input {...register("tikunen")} />
        </div>
        <div>
          <label>間取り:</label>
          <input
            type="file"
            accept="image/*"
            {...register("photo1")}
            onChange={(event) => handleImagePreview(event, 0)}
          />
        </div>
        <div>
          <label>外観:</label>
          <input
            type="file"
            accept="image/*"
            {...register("photo2")}
            onChange={(event) => handleImagePreview(event, 1)}
          />
        </div>
        <div>
          <label>内装:</label>
          <input
            type="file"
            accept="image/*"
            {...register("photo3")}
            onChange={(event) => handleImagePreview(event, 2)}
          />
        </div>
      </form>

      <h2>プレビュー</h2>
      <div>
        <p><strong>賃料:</strong> {formData.tingin || "未入力"}</p>
        <p><strong>駅:</strong> {formData.eki || "未入力"}</p>
        <p><strong>築年:</strong> {formData.tikunen || "未入力"}</p>
        <div>
          <p><strong>間取り プレビュー:</strong></p>
          {imagePreviews[0] && (
            <img src={imagePreviews[0]} alt="写真1プレビュー" style={{ maxWidth: "200px" }} />
          )}
        </div>
        <div>
          <p><strong>外観 プレビュー:</strong></p>
          {imagePreviews[1] && (
            <img src={imagePreviews[1]} alt="写真2プレビュー" style={{ maxWidth: "200px" }} />
          )}
        </div>
        <div>
          <p><strong>内装n プレビュー:</strong></p>
          {imagePreviews[2] && (
            <img src={imagePreviews[2]} alt="写真3プレビュー" style={{ maxWidth: "200px" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default FormText;
