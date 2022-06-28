import { useQuery } from "@apollo/client";
import { ENC_COMMENTS } from "../../utils/queries";
import  CommentCard  from "./CommentCard"

const CommentContainer = (props) => {
    const vars = props.encounterId;
    const { loading, data } = useQuery(ENC_COMMENTS, { variables: {encounterId: vars}, });
    // const { loading, data } = useQuery(VIS_ENCOUNTERS, {
    //     variables: variables,
    //   });
    console.log("deez props:", props);
    console.log('thar be vars here', vars)
    console.log(data)

    if (loading) return "loading...";
    // if (err) return err.message;

    let commentList = data?.comments || [];
    console.log(commentList)
    let shortCommentList = commentList.slice(0, props.quantityDisplay);
    console.log("shawty", shortCommentList)

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