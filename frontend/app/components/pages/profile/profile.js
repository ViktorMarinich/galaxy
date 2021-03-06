import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
//------------------------------------------------------------------------------
import * as profileActions from '../../../actions/ProfileActions';
import * as friendsActions from '../../../actions/FriendsActions';
//------------------------------------------------------------------------------
import Avatar from '../resources/image/avatar';
import AvatarIco from '../resources/image/ico_list';
import UserInfo from '../resources/user/info';
import UserActions from '../resources/user/actions';
import NewMessage from '../resources/forms/message';
import NewPost from '../resources/forms/post';
import Post from '../resources/post/post';
import NewComment from '../resources/forms/comment';
import Comment from '../resources/comment/comment';
import ChangAvatar from '../resources/user/chang_avatar';
import ImgListView from '../resources/image_view/img';

import './style.scss'

class Profile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {show: false,
                  showFullSizeAvatar: false};
  }
  addContactGetShowMessage = (contact) => {
    this.setState({show: contact})
  }
  getContactShowFullSizeAvatar = (show) => {
    this.setState({showFullSizeAvatar: show})
  }
  getShowFullSizeAvatar = (e) => {
    this.setState({showFullSizeAvatar: true})
  }
  getFriends = (event) => {
    const { setFriends } = this.props.friendsActions
    axios.get("/be/users/"+this.props.profile.user.id+"/friends")
    .then((response) => { setFriends(response.data.friends) })
  }

  render() {
    const { setProfile } = this.props.profileActions
    const { setStatus } = this.props.profileActions
    const { setPosts } = this.props.profileActions
    const { setComments } = this.props.profileActions
    var profile = this.props.profile
    var showFriends = this.props.profile.friends.length>0
    var showImages = this.props.profile.images.length>0
    return (
      <div className="user-show">
        <div className="profile-static">
          <div onClick={this.getShowFullSizeAvatar}>
            < Avatar src={profile.avatar} />
          </div>
          < ChangAvatar />
          < ImgListView images={profile.all_avatar}
                        begin={0}
                        show={this.state.showFullSizeAvatar}
                        getShow={this.getContactShowFullSizeAvatar} />
          <hr />
          < UserActions id={this.props.id}
                        user_id={profile.user.id}
                        is_friend={profile.is_friend}
                        setStatus={setStatus}
                        ContactGetShow={this.addContactGetShowMessage} />
          < NewMessage id={profile.user.id}
                       show={this.state.show}
                       ContactGetShow={this.addContactGetShowMessage} />
          <div className="friends" style={{display: (showFriends? "block" : "none")}}>
            <p className="friends-h1">
              Friends
              <Link to={"/ant-eater/users/"+profile.user.id+"/friends"}
                    onClick={this.getFriends}>
                Show all
              </Link>
            </p>
            {(profile.friends==undefined? [] : profile.friends)
              .map(function(friend, index) {
              return (
                < AvatarIco user={friend.user}
                            img={friend.avatar}
                            setProfile={setProfile}
                            key={index} /> )}, this)}
          </div>
          <hr className="bottom" />
          <hr style={{display: (showFriends? "block" : "none")}}/>
          <div className="profile-image-list"
               style={{display: (showFriends? "block" : "none")}}>
            <p>Last images in gallery</p>
            {(profile.images==undefined? [] : profile.images)
              .map(function(img, index) {
              return (
                <img src={img} key={index} /> )}, this)}
          </div>
        </div>
        <div className="profile-activity">
          < UserInfo user={profile.user} statistics={profile.statistics} />
          < NewPost id={this.props.id}
                    user_id={profile.user.id}
                    setPosts={setPosts} />
          {profile.posts.map(function(post, index){
            return (
              <div key={(new Date()).getTime()+100*index}>
                < Post author={profile.user}
                               img={profile.avatar}
                               current={this.props.id==profile.user.id}
                               src={post.img}
                               post={post.post}
                               rating={post.rating}
                               utube={post.utube}
                               key={post.post.id}
                               setProfile={setProfile}
                               setPosts={setPosts}
                               setComments={setComments} />
                {(profile.comments[index]==undefined? [] : profile.comments[index])
                  .map(function(comment, index) {
                  return (
                    < Comment comment={comment.comment}
                              author={comment.user}
                              rating={comment.rating}
                              current={this.props.id==comment.user.id}
                              setProfile={setProfile}
                              setComments={setComments}
                              key={index}
                              img={comment.avatar} /> )}, this)}
                < NewComment key={(new Date()).getTime()+index}
                             post_id={post.post.id}
                             id={this.props.id}
                             setComments={setComments} />
              </div>
            )}, this)}
        </div>
        <hr className='bottom'/>
      </div>
    );
  }
};
//------------------------------------------------------------------------------
function mapStateToProps (state) {
  return {
    id: state.currentUser.id,
    profile: state.profile
  }
}

function mapDispatchToProps(dispatch) {
  return {
    profileActions: bindActionCreators(profileActions, dispatch),
    friendsActions: bindActionCreators(friendsActions, dispatch)
  }
}
//------------------------------------------------------------------------------
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
