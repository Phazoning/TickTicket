import React, {Component} from 'react'
import {View, Image, SafeAreaView, FlatList, Text, TouchableOpacity} from 'react-native';
import styles from "./styles";
import assets from "../../src/assets";
import {CommonActions} from '@react-navigation/native';
import * as ReduxActions from '../../redux/actions'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import DrawerButton from '../DrawerButton/DrawerButton';

class KnowledgeBase extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            openedArticles: []
        };
    }

    async componentDidMount(){
        this.props.getArticles()
    }

    componentDidUpdate(){
        
    }

    toggleArticle = (name) => {
        let storedArticles = this.state.openedArticles

        if (this.state.openedArticles.includes(name)){
            storedArticles.pop(storedArticles.indexOf(name))
        } else {
            storedArticles.push(name)
        }

        this.setState({
            openedArticles: storedArticles
        })
    }

    render (){
        return(
            <SafeAreaView style={styles.body}>
                <View style={styles.header}>
                    <DrawerButton {...this.props} style={styles.menuToggle}/>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.getArticles()
                        }}
                        style={styles.button}
                    >
                        <Image style={styles.refreshImage} source={assets.cycleImage}/>
                    </TouchableOpacity>
                </View>
                <FlatList
                    style={styles.articleList}
                    data={this.props.articles}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                        <View style={styles.articleItem}>
                            <View style={styles.articleHead}>
                                <Text style={styles.articleItemTitle}>{item.title}</Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.toggleArticle(item.title)
                                    }}
                                    style={styles.articleToggleButton}
                                >
                                    <Text style={styles.articleToggleButtonText}>
                                        {this.state.openedArticles.includes(item.title) ? "-" : "+"}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            {
                                this.state.openedArticles.includes(item.title) &&
                                <View style={styles.articleItemBody}>
                                    <Text style={styles.articleItemBodyText}>{item.content}</Text>
                                </View>
                            }
                        </View>
                    )}
                />
            </SafeAreaView>
        )
    }
}

function mapStateToProps(state, props) {
    return {
      articles: state.reducer.articles,
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(ReduxActions, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(KnowledgeBase);