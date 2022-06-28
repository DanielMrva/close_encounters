import { useQuery } from "@apollo/client";
import { ENC_COMMENTS } from "../../utils/queries";
import  CommentCard  from "./CommentCard"

const CommentContainer = (props) => {
    const vars = props.encounterId;
    const { loading, data } = useQuery(ENC_COMMENTS, { variables: {encounterId: vars}, });

    console.log(data)

    if (loading) return "loading...";

    let commentList = data?.encounterComments || [];

    let shortCommentList = commentList.slice(0, props.quantityDisplay);

    return (
        <div className="comment-container">
            {shortCommentList.map((data, index) => {
                return(
                    <CommentCard key={index} data={data}>

                    </CommentCard>
                )
            })}
        </div>
    )
};

export default CommentContainer;