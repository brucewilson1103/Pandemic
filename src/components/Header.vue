<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Pandemic Academic</router-link>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link to="/government" activeClass="active" tag="li">
            <a>Government</a>
          </router-link>

          <router-link to="/medical" activeClass="active" tag="li">
            <a>Medical</a>
          </router-link>
        </ul>

        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">End Coronavirus Logs for Day</a></li>
          <li class="dropdown">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Save and Load <span class="caret"> </span>
            </a>
            <ul class="dropdown-menu">
              <li><a href="#"> Save Data</a></li>
              <li><a href="#"> Load Data</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
