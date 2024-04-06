import React, { useState } from "react";
import "./Users.css";
import Errorbox from "../Errorbox/Errorbox";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import useApiCrud from "../../Services/useApiCrud";

function Users() {
  const [
    usersData,
    fetchData,
    deleteUser,
    updateUser,
    insertUser,
    isShowMessage,
  ] = useApiCrud("http://localhost:8000/api/users/");

  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isShowDetailModal, setIsShowDetailModal] = useState(false);

  const [mainUserInfo, setMainUserInfo] = useState([]);

  const [userId, setUserId] = useState();
  const [userNewFirstname, setUserNewFirstname] = useState("");
  const [userNewlastname, setUserNewlastname] = useState("");
  const [userNewUsername, setUserNewUsername] = useState("");
  const [userNewPassword, setUserNewPassword] = useState("");
  const [userNewPhone, setUserNewPhone] = useState("");
  const [userNewCity, setUserNewCity] = useState("");
  const [userNewEmail, setUserNewEmail] = useState("");
  const [userNewAddress, setUserNewAddress] = useState("");
  const [userNewScore, setUserNewScore] = useState("");
  const [userNewBuy, setUserNewBuy] = useState("");

  const deleteModalSubmitHandler = () => {
    console.log("دیلیت تایید شد");

    deleteUser(userId);

    setIsShowDeleteModal(false);
  };

  const deleteModalCancelHandler = () => {
    console.log("دیلیت کنسل شد");
    setIsShowDeleteModal(false);
  };

  const updateModalSubmitHandler = (event) => {
    event.preventDefault();
    console.log("ویرایش تایید شد");

    let newUserForUpdate = {
      firsname: userNewFirstname,
      lastname: userNewlastname,
      username: userNewUsername,
      password: userNewPassword,
      phone: userNewPhone,
      city: userNewCity,
      email: userNewEmail,
      address: userNewAddress,
      score: userNewScore,
      buy: userNewBuy,
    };

    updateUser(userId, newUserForUpdate);

    setIsShowEditModal(false);
  };

  const detailsModalCloseHandler = () => {
    setIsShowDetailModal(false);
  };

  return (
    <div className="cms-main">
      <h1 className="cms-title">لیست کاربران</h1>

      {usersData.length ? (
        <table className="cms-table">
          <thead>
            <tr>
              <th>نام و نام خانوادگی</th>
              <th>یوزرنیم</th>
              <th>رمز عبور</th>
              <th>شماره تماس</th>
              <th>ایمیل</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {usersData.map((user) => (
              <tr key={user.id}>
                <td>{user.firsname + " " + user.lastname}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => {
                      setIsShowDeleteModal(true);
                      setUserId(user.id);
                    }}
                  >
                    حذف
                  </button>
                  <button
                    onClick={() => {
                      setIsShowDetailModal(true);
                      setMainUserInfo(user);
                    }}
                  >
                    جزئیات
                  </button>
                  <button
                    onClick={() => {
                      setIsShowEditModal(true);
                      setUserId(user.id);
                      setUserNewFirstname(user.firsname);
                      setUserNewlastname(user.lastname);
                      setUserNewUsername(user.username);
                      setUserNewPassword(user.password);
                      setUserNewPhone(user.phone);
                      setUserNewCity(user.city);
                      setUserNewEmail(user.email);
                      setUserNewAddress(user.address);
                      setUserNewScore(user.score);
                      setUserNewBuy(user.buy);
                    }}
                  >
                    ویرایش
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Errorbox msg="هیج کاربری یافت نشد" />
      )}

      <DeleteModal
        title="آیا از حذف کاربر اطمینان دارید؟"
        isShowDelete={isShowDeleteModal}
        SubmitAction={deleteModalSubmitHandler}
        CancelAction={deleteModalCancelHandler}
      />

      <EditModal
        onClose={isShowEditModal}
        onSetClose={setIsShowEditModal}
        onSubmit={updateModalSubmitHandler}
      >
        <div className="edit-user-info-input-group">
          <input
            type="text"
            className="edit-user-info-input"
            placeholder="مقدار جدید را وارد نمائید"
            value={userNewFirstname}
            onChange={(e) => setUserNewFirstname(e.target.value)}
          />
        </div>
        <div className="edit-user-info-input-group">
          <input
            type="text"
            className="edit-user-info-input"
            placeholder="مقدار جدید را وارد نمائید"
            value={userNewlastname}
            onChange={(e) => setUserNewlastname(e.target.value)}
          />
        </div>
        <div className="edit-user-info-input-group">
          <input
            type="text"
            className="edit-user-info-input"
            placeholder="مقدار جدید را وارد نمائید"
            value={userNewUsername}
            onChange={(e) => setUserNewUsername(e.target.value)}
          />
        </div>
        <div className="edit-user-info-input-group">
          <input
            type="text"
            className="edit-user-info-input"
            placeholder="مقدار جدید را وارد نمائید"
            value={userNewPassword}
            onChange={(e) => setUserNewPassword(e.target.value)}
          />
        </div>
        <div className="edit-user-info-input-group">
          <input
            type="text"
            className="edit-user-info-input"
            placeholder="مقدار جدید را وارد نمائید"
            value={userNewPhone}
            onChange={(e) => setUserNewPhone(e.target.value)}
          />
        </div>
        <div className="edit-user-info-input-group">
          <input
            type="text"
            className="edit-user-info-input"
            placeholder="مقدار جدید را وارد نمائید"
            value={userNewCity}
            onChange={(e) => setUserNewCity(e.target.value)}
          />
        </div>
        <div className="edit-user-info-input-group">
          <input
            type="text"
            className="edit-user-info-input"
            placeholder="مقدار جدید را وارد نمائید"
            value={userNewEmail}
            onChange={(e) => setUserNewEmail(e.target.value)}
          />
        </div>
        <div className="edit-user-info-input-group">
          <input
            type="text"
            className="edit-user-info-input"
            placeholder="مقدار جدید را وارد نمائید"
            value={userNewAddress}
            onChange={(e) => setUserNewAddress(e.target.value)}
          />
        </div>
        <div className="edit-user-info-input-group">
          <input
            type="text"
            className="edit-user-info-input"
            placeholder="مقدار جدید را وارد نمائید"
            value={userNewScore}
            onChange={(e) => setUserNewScore(e.target.value)}
          />
        </div>
        <div className="edit-user-info-input-group">
          <input
            type="text"
            className="edit-user-info-input"
            placeholder="مقدار جدید را وارد نمائید"
            value={userNewBuy}
            onChange={(e) => setUserNewBuy(e.target.value)}
          />
        </div>
      </EditModal>

      <DetailsModal
        isShowDetail={isShowDetailModal}
        onHide={detailsModalCloseHandler}
      >
        <table className="cms-table">
          <thead>
            <tr>
              <th>شهر</th>
              <th>آدرس</th>
              <th>امتیاز</th>
              <th>خرید</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{mainUserInfo.city}</td>
              <td>{mainUserInfo.address}</td>
              <td>% {mainUserInfo.score}</td>
              <td>{Number(mainUserInfo.buy).toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </DetailsModal>
    </div>
  );
}

export default Users;
