<template>
  <section>
    <h1>Projects</h1>
    <p>Here are the projects that we have been working on:</p>
    <main>
      <div class="project" 
        v-for="project in projects" 
        :key="project.name">
        <h2>{{project.name}}</h2>
        <img 
          :src="project.screenshot" 
          alt="project screenshot">
        <p>{{project.text}}</p>
        <div class="tags">
            <p class="tag"
              v-for="tag in project.tags" 
              :key="tag">
              {{tag}}
            </p>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import data from '../assets/projects_data'
export default {
  name: 'projects',
  data: function() {
    return {
      projects: data
    }
  }
}
</script>


<style scoped>
main {
  display: flex;
  flex-wrap: wrap;
}

.project {
  flex: 1 1 33%;
}

.tags {
  display: flex;
  justify-content: center;
}

.tag {
  background-color: #666;
  color: white;
  padding: 0.2em 1em;
  border-radius: 20px;
  margin: 0 0.5em;
}
</style>