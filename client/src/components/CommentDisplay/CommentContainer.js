import { useQuery } from "@apollo/client";
import { ENC_COMMENTS } from "../../utils/queries";
import { CommentCard } from "./CommentCard"

const CommentContainer = ({quantityDisplay, encounterId}) => {
    const { loading, err, data } = useQuery(ENC_COMMENTS, { variables: encounterId,});

    if (loading) return "loading...";
    if (err) return err.message;

    let commentList = data?.comments || [];
    let shortCommentList = commentList.slice(0, quantityDisplay);

    return (
        <div className="comment-container">
            {shortCommentList.map((data, index) => {
                return(
                    <CommentCard key={index} data={data}></CommentCard>
                )
            })}
        </div>
    )
};

export default CommentContainer;