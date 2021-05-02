import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        top: 0,
        left: 0,
        right: 0,
        padding: '14px'
    },
    control: {
        padding: theme.spacing(2),
    }
}));

export default function SubNavBar() {
    const classes = useStyles();
    let urlpathname = window.location.pathname;
    let splitedPath = urlpathname.split('/');
    let SubNavList = '  <li class="js35eu-0 cXgXUQ">';
    SubNavList += '<a class="sc-1bu7qfl-0 lfMGmO js35eu-1 cXpuyZ" href="/">';
    SubNavList += ' <div class="js35eu-3 cXGnHr">Home</div></a></li>';
    let path = '';
    for (let i = 1; i < splitedPath.length; i++) {
        for (let j = 0; j < i; ++j) {
            path += '/' + splitedPath[j + 1];
        }
        // if (splitedPath.length === 1) {
        //     SubNavList += '<li style="cursor:pointer,color:black !important" key="' + i + '" class="js35eu-0 cXgXUQ"><div class="js35eu-6 cYfDtS">' + splitedPath[i] + '</div></li>'
        // } else {
        SubNavList += '<li key="' + i + '" class="js35eu-0 cXgXUQ">';
        SubNavList += '<a class="sc-1bu7qfl-0 lfMGmO js35eu-1 cXpuyZ" href=' + path + '>';
        SubNavList += '<div class="js35eu-6 cYfDtS">' + splitedPath[i] + '</div></li>'
        // }
        path = '';
    }
    return (
        <div className={classes.root}>
            <ol className={"sc-1rq1wxh-0 chtnE"} dangerouslySetInnerHTML={{ __html: SubNavList }}>
            </ol>
        </div >
    )
}
