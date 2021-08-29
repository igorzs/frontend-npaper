import React, { Component } from 'react'


export default class Footer extends Component {
    render() {
        return (
            <div>

                <script src="plugins/jquery/jquery.min.js"></script>
                <script src="plugins/jquery-ui/jquery-ui.min.js"></script>
                <script>
                $.widget.bridge('uibutton', $.ui.button)
                </script>
                <script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="plugins/select2/js/select2.full.min.js"></script>
                <script src="plugins/chart.js/Chart.min.js"></script>
                <script src="plugins/sparklines/sparkline.js"></script>
                <script src="plugins/jqvmap/jquery.vmap.min.js"></script>
                <script src="plugins/jqvmap/maps/jquery.vmap.usa.js"></script>
                <script src="plugins/jquery-knob/jquery.knob.min.js"></script>
                <script src="plugins/moment/moment.min.js"></script>
                <script src="plugins/daterangepicker/daterangepicker.js"></script>
                <script src="plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"></script>
                <script src="plugins/summernote/summernote-bs4.min.js"></script>
                <script src="plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
                <script src="dist-bkp/js/adminlte.js"></script>
                <script src="dist-bkp/js/pages/dashboard.js"></script>
                <script src="dist-bkp/js/demo.js"></script>
            </div >

        )
    }
}