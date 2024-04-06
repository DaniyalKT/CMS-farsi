import React, { useState } from "react";
import "./Comments.css";
import Errorbox from "../Errorbox/Errorbox";
import useApiCrud from "../../Services/useApiCrud";
import DetailsModal from "../DetailsModal/DetailsModal";
import DeleteModal from "../DeleteModal/DeleteModal";

import { ToastContainer, toast } from "react-toastify";
import EditModal from "../EditModal/EditModal";
import useAcceptReject from "../../Services/useAcceptReject";

function Comments() {
  const [
    getAllComments,
    fetchData,
    deleteComment,
    updateComment,
    insertComment,
    isShowMessage,
  ] = useApiCrud("http://localhost:8000/api/comments/");
   
  const isAcceptReject = useAcceptReject('http://localhost:8000/api/comments/')

  const [isShowDetail, setIsShowDetail] = useState(false);
  const [isShowDelete, setIsShowDelete] = useState(false);
  const [isShowEdit, setIsShowEdit] = useState(false);
  const [isShowAccept, setIsShowAccept] = useState(false);
  const [isShowReject, setIsShowReject] = useState(false);

  const [commentBodyInfo, setCommentBodyInfo] = useState("");
  const [commentID, setCommentID] = useState();

  const detailsModalCloseHandler = () => setIsShowDetail(false);
  const deleteModalCloseHandler = () => setIsShowDelete(false);

  const deleteModalComment = () => {
    console.log("کامنت با موفقیت حذف شد");

    deleteComment(commentID);

    setIsShowDelete(false);
  };

  const updateModalSubmitHandler = (e) => {
    e.preventDefault();
    console.log("آپدیت شد");

    let newReqBody = {
      body: commentBodyInfo,
    };

    updateComment(commentID, newReqBody);

    setIsShowEdit(false);
  };

  const acceptModalSubmitHandler = () => {
    console.log("عملیات تایید کامنت انجام شد");
     
    isAcceptReject('accept', commentID, fetchData)

    setIsShowAccept(false);
  };
  const acceptModalCancelHandler = () => {
    console.log("عملیات تایید کامنت کنسل شد");
    setIsShowAccept(false);
  };

  const rejectModalSubmitHandler = () => {
    setIsShowReject(false);

    isAcceptReject('reject', commentID, fetchData)
       
    console.log("عملیات لغو تایید انجام شد");
  };
     
  const rejectModalCancelHandler = () => {
    setIsShowReject(false);
    console.log("عملیات لغو تایید  کنسل شد");
  };

  return (
    <div className="cms-main">
      
      <h1 className="cms-title">کامنت ها</h1>

      {getAllComments.length ? (
        <table className="cms-table ">
          <thead>
            <tr>
              <th>اسم کاربر</th>
              <th>محصول</th>
              <th>کامنت</th>
              <th>تاریخ</th>
              <th>ساعت</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {getAllComments.map((comment) => (
              <tr key={comment.id}>
                <td>{comment.userID}</td>
                <td>{comment.productID}</td>
                <td>
                  <button
                    onClick={() => {
                      setIsShowDetail(true);
                      setCommentBodyInfo(comment.body);
                    }}
                  >
                    دیدن متن
                  </button>
                </td>
                <td>{comment.date}</td>
                <td>{comment.hour}</td>
                <td>
                  <button
                    onClick={() => {
                      setIsShowDelete(true);
                      setCommentID(comment.id);
                    }}
                  >
                    حذف
                  </button>
                  <button
                    onClick={() => {
                      setIsShowEdit(true);
                      setCommentID(comment.id);
                      setCommentBodyInfo(comment.body);
                    }}
                  >
                    ویرایش
                  </button>
                  <button>پاسخ</button>

                  {comment.isAccept == 0 ? (
                    <button
                      onClick={() => {
                        setIsShowAccept(true);
                        setCommentID(comment.id);
                      }}
                    >
                      تایید
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setIsShowReject(true);
                        setCommentID(comment.id);
                      }}
                    >
                      لغو تایید
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Errorbox msg="هیچ کامنتی یافت نشد" />
      )}

      <DetailsModal
        onHide={detailsModalCloseHandler}
        isShowDetail={isShowDetail}
      >
        <p style={{ margin: 40 }}>{commentBodyInfo}</p>
      </DetailsModal>

      {/* Delete */}
      <DeleteModal
        title="آیا از حذف اطمینان دارید؟"
        CancelAction={deleteModalCloseHandler}
        SubmitAction={deleteModalComment}
        isShowDelete={isShowDelete}
      />

      <EditModal
        onClose={isShowEdit}
        onSetClose={setIsShowEdit}
        onSubmit={updateModalSubmitHandler}
      >
        <textarea
          className="textarea-edit-style"
          value={commentBodyInfo}
          onChange={(e) => setCommentBodyInfo(e.target.value)}
        ></textarea>
      </EditModal>

      {/* Accept */}
      <DeleteModal
        title="آیا از تایید اطمینان دارید ؟"
        isShowDelete={isShowAccept}
        SubmitAction={acceptModalSubmitHandler}
        CancelAction={acceptModalCancelHandler}
      />

      {/* Reject */}

      <DeleteModal
        title="آیا از لغو تایید اطمینان دارید ؟"
        isShowDelete={isShowReject}
        SubmitAction={rejectModalSubmitHandler}
        CancelAction={rejectModalCancelHandler}
      />

      <ToastContainer position="top-left" />
    </div>
  );
}

export default Comments;
