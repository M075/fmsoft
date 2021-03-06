document.body.innerHTML = "<nav class="navbar navbar -default navbar - transparent navbar - fixed - top navbar - color - on - scroll" color-on-scroll=" "
id = "sectionsNav" >
    <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
		<div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="brand" href="index.html">
                <img src="assets/img/bottom.png" width="50px" height="50px" />
            </a>
        </div>

        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <a href="index.html">
                        <i class="material-icons">home</i> Home
					</a>
                </li>
                <li>
                    <a href="about-us.html">
                        <i class="material-icons">list</i> About
					</a>
                </li>
                <li>
                    <a href="blog.html">
                        <i class="material-icons">art_track</i> Blogs
					</a>
                </li>
                <li>
                    <a href="contact-us.html">
                        <i class="material-icons">email</i> Contact
					</a>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        <i class="material-icons">view_day</i> Services
						<b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu dropdown-with-icons">		<!-- 1. MAKE VERTICAL NAV 2. ADD RELEVANT LINKS TO PAGES-->
						<li>
                            <a href="software.html">
                                <i class="material-icons">laptop_windows</i> Corporate Software
							</a>
                        </li>
                        <li>
                            <a href="websites.html">
                                <i class="material-icons">view_quilt</i> Websites
							</a>
                        </li>
                        <li>
                            <a href="webapps.html">
                                <i class="material-icons">code</i> Web Apps
							</a>
                        </li>
                        <li>
                            <a href="mobileapps.html">
                                <i class="material-icons">developer_mode</i>Android/iOS Apps
							</a>
                        </li>
                        <li>
                            <a href="technical.html">
                                <i class="material-icons">build</i> Repair Center
							</a>
                        </li>
                        <li>
                            <a href="projects.html">
                                <i class="material-icons">menu</i> Projects
							</a>
                        </li>
                        <li>
                            <a href="testimonials.html">
                                <i class="material-icons">chat</i> Testimonials
							</a>
                        </li>
                    </ul>
                </li>
                <form class="navbar-form navbar-right" role="search">			<!-- ADD BACKEND FOR SEARCH -->
					<div class="form-group form-white">
                        <input type="text" class="form-control" placeholder="Search">
					</div>
                        <button type="submit" class="btn btn-white btn-raised btn-fab btn-fab-mini"><i
                            class="material-icons">search</i></button>
				</form>
			</ul>
		</div>
        </div>
    </div>
	</nav>";